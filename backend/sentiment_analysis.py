import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.svm import LinearSVC
from sklearn.metrics import classification_report

# Load the dataset from Excel file
file_path = "../sentiment analysis.xlsx"
df = pd.read_excel(file_path)

# Display the first few rows of the dataframe to understand its structure
print(df.head())

# Ensure the column names are correct
text_column = 'post_made'
label_column = 'sentiment'

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df[text_column], df[label_column], test_size=0.2, random_state=42)

# Build a pipeline for text classification
text_clf = Pipeline([
    ('vect', CountVectorizer()),
    ('tfidf', TfidfTransformer()),
    ('clf', LinearSVC()),
])

# Train the classifier
text_clf.fit(X_train, y_train)

# Predictions
y_pred = text_clf.predict(X_test)

# Evaluation
print("Classification Report:\n", classification_report(y_test, y_pred))

# Function to predict sentiment of new text
def predict_sentiment(text):
    prediction = text_clf.predict([text])
    return prediction[0]

# Example of using the prediction function
text_example = "This community is really helpful and supportive."
print(f"Text: '{text_example}', Sentiment: {predict_sentiment(text_example)}")
