<<<<<<< HEAD
In this project, let's build a **Congrats Card** by applying the concepts we have learned till now.
=======
In this project, let's build a **Simple Todos** app by applying the concepts we have learned till now.
>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d

### Refer to the image below:

<br/>
<div style="text-align: center;">
<<<<<<< HEAD
<img src="https://assets.ccbp.in/frontend/content/react-js/congrats-card-lg-output-img.png" alt="congrats-card-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
=======
    <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif" alt="simple todos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

<<<<<<< HEAD
- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/congrats-card-sm-output-img.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/congrats-card-lg-output-img.png)

</details>

### Completion Instructions

<details>
=======
- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/simple-todos-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of given todos should be displayed with a delete button for each todo
- When **Delete** button of a todo is clicked, then the respective todo should be deleted
- The `SimpleTodos` will consist of the `initialTodosList`. It consists of a list of todo objects with the following properties in each todo object

  |  Key  | Data Type |
  | :---: | :-------: |
  |  id   |  Number   |
  | title |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-component-structure.png" alt="simple todos component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

<<<<<<< HEAD
- `index.js`
- `index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png](https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png)
- [https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png](https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png)
- [https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png](https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png)
</details>

=======
- `src/components/SimpleTodo/index.js`
- `src/components/SimpleTodo/index.css`
- `src/components/TodoItem/index.js`
- `src/components/TodoItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d
<details>
<summary>Colors</summary>

<br/>

<<<<<<< HEAD
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #cffafe; width: 150px; padding: 10px; color: black">Hex: #cffafe</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
=======
<div style="background-color: #ffc2a0; width: 150px; padding: 10px; color: black">Hex: #ffc2a0</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ff8542; width: 150px; padding: 10px; color: white">Hex: #ff8542</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
<<<<<<< HEAD
=======
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
>>>>>>> 41d00980829c417cd330b41d3000246b5feaa02d
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
