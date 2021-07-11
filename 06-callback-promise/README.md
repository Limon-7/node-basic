1. #### What is Synchronous and Asynchronous programming and describe the differences between them?

**Synchronous:** In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one.

**Key points:**

- In Synchronous transmission, Data is sent in the form of blocks or frames.
- In Synchronous transmission, the time interval of transmission is constant.

**Asynchronous:** In asynchronous operations, on the other hand, you can move to another task before the previous one finishes. This way, with asynchronous programming you’re able to deal with multiple requests simultaneously, thus completing more tasks in a much shorter period of time.

**Key Points:**

- Asynchronous does not mean concurrent or multi threaded.
- In asynchronous transmission, Data is sent in the form of byte or character.
- In asynchronous transmission, the time interval of transmission is not constant, it is random.

2. #### How can we deal with asynchronous code?

There are three patterns we can deal with asynchronous code.

1. ##### Callback:

   A callback is a function when an asynchronous function is ready.

   ```js
   const getUser = (id, callback) => {
     logger("Data fetxhing start>3000....");
     setTimeout(() => {
       callback({ id: id, name: "limon" });
     }, 2000);
   };
   const getRopository = (user, callback) => {
     logger("Repositorty fetching start>3000....", user);
     setTimeout(() => {
       callback(["repo1", "repo2", "repo3"]);
     }, 2000);
   };
   getUser(1, (user) => {
     getRopository(user.name, (repo) => {
       logger("Repos:", repo);
     });
   });
   ```

2. ##### Promise:

   Promise is an object that holds the eventual result of an asynchronous function.Initially it's an independent state when we create the promises. Anywhere we have an asynchronous function that takes a callback we should modify that function to return a promise.

   ```js
   const p = () =>
     new Promise((resolve, reject) => {
       // kick off some async work
       // ...
       setTimeout(() => {
         // resolve({ id: id, profile: "limon" });//pending=>resolved,fulfilled
         reject(new Error("error-occured")); //pending=>reject,fulfilled
       }, 2000);
     });
   // consume the promise
   p.then((result) => console.log("Result:", result)).catch((err) =>
     console.log(err.message)
   );
   ```

3. ##### async/await:

   The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style.

   ```js
   function getUser(id) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("Getting a user from a database");
         resolve({ id: id, profile: "limon" });
       }, 2000);
     });
   }
   async function displayUser() {
     try {
       const user = await getUser(1);
       console.log(user);
     } catch (error) {
       console.log(error.message);
     }
   }
   ```

##### Anonymos Function:

A function that does not have a name.
