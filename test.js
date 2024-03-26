//function App() {
// Your original string
const originalString = "This is a sample string";

// Split the string based on the space character
const parts = originalString.split(" ");

// Take the first part of the split string
const cutString = parts[0]; // Or you can use destructuring like const [cutString] = parts;

console.log(cutString);
//   return (
//     <div>
//       <p>Original String: {originalString}</p>
//       <p>Cut String: {cutString}</p>
//     </div>
//   );
// }
