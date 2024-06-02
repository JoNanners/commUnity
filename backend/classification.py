import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.svm import LinearSVC
from sklearn.metrics import classification_report

# Load the dataset
file_path = "../classification dataset.xlsx"
df = pd.read_excel(file_path)

# Verify the dataset
print(df.head())

# Ensure the column names are correct
profession_column = 'Profession'
volunteer_column = 'Volunteer'  # Update column name to match the Excel file

# Split the dataset into features (X) and target (y)
X = df[profession_column]
y = df[volunteer_column]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build a pipeline for text classification
text_clf = Pipeline([
    ('vect', CountVectorizer()),  # Convert text into a matrix of token counts
    ('tfidf', TfidfTransformer()),  # Transform the count matrix into a normalized tf or tf-idf representation
    ('clf', LinearSVC()),  # Use a linear support vector classifier
])

# Train the classifier
text_clf.fit(X_train, y_train)

# Predictions
y_pred = text_clf.predict(X_test)

# Evaluation
print("Classification Report:\n", classification_report(y_test, y_pred))

# Function to predict volunteer role based on profession
def predict_volunteer(profession):
    prediction = text_clf.predict([profession])
    return prediction[0]

# Example of using the prediction function
profession_example = "Mechanical Engineer"
print(f"Profession: '{profession_example}', Predicted Volunteer Role: {predict_volunteer(profession_example)}")
