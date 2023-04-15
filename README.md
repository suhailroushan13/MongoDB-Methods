# MongoDB-Methods

### MongoDB is a NoSQL document-oriented database system. It provides a rich set of methods and functions to interact with the database. Here are some of the most commonly used methods in MongoDB:

## Collection Management

- `db.collection()`: Returns a reference to a collection.
- `collection.countDocuments()`: Returns the number of documents in a collection.
- `collection.createIndex()`: Creates an index on a collection.
- `collection.deleteMany()`: Deletes multiple documents from a collection.
- `collection.deleteOne()`: Deletes a single document from a collection.
- `collection.drop()`: Drops a collection from a database.
- `collection.find()`: Returns a cursor to a set of documents in a collection.
- `collection.findOne()`: Returns a single document from a collection.
- `collection.findOneAndDelete()`: Deletes a single document and returns it.
- `collection.findOneAndReplace()`: Replaces a single document and returns it.
- `collection.findOneAndUpdate()`: Updates a single document and returns it.
- `collection.insertMany()`: Inserts multiple documents into a collection.
- `collection.insertOne()`: Inserts a single document into a collection.
- `collection.replaceOne()`: Replaces a single document in a collection.
- `collection.updateMany()`: Updates multiple documents in a collection.
- `collection.updateOne()`: Updates a single document in a collection.

## Installation

```bash
git clone git@github.com:suhailroushan13/MongoDB-Methods.git
cd MongoDB-Methods
npm install

```

- Add Your MongoDB URI in Config Folder in default.json file
- Add Your Collection Name in 3rd Parameter in Models Folder inside index.js file
  const userModel = new mongoose.model("Suhail", userSchema, "methods");
  change the collection Name from methods to "YOUR-COLLECTION-NAME"

- To Test Methods 
```bash
#Example
node ./controllers/insertMany.js 
node ./controllers/insertOne.js 

```
