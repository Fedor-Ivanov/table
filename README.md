# Table component

## Demo

Install the required modules:

```sh
$ npm install
```

Run dev server:

```sh
$ npm run start
```

## Component

```jsx
<Table
  data={data}
  oddRowBck={"red"}
  evenRowBck={"blue"}
  editableColor={"yellow"}
  cellPadding={5}
  onDelete={onDeleteTableRow}
  onAddNewRow={onNewTableRow}
  onUpdate={onUpdateTableRow}
/>
```

### Props

#### data

Takes an object with the following structure:

```js
const data = {
  headers: ["Id", "Name", "Surname", "City"],
  rows: [
    { id: "1", name: "Bernadine", surname: "Brakus", city: "Williamsontown" },
    { id: "2", name: "Ewell", surname: "Ondricka", city: "Lake Almouth" },
    { id: "3", name: "John", surname: "Welch", city: "Thompsonville" },
    { id: "4", name: "Loyal", surname: "Lang", city: "Lindsaystad" },
  ],
};
```

#### oddRowBck

Sets the color for odd rows in the table:

```js
  oddRowBck={"red"}
  oddRowBck={"#ff0000"}
  oddRowBck={"rgb(255, 0, 0)"}
```

#### evenRowBck

Sets the color for even rows in the table:

```js
  evenRowBck={"blue"}
  evenRowBck={"#0000ff"}
  evenRowBck={"rgb(0, 0, 255)"}
```

#### editableColor

Sets the color for the editable row in the table:

```js
  editableColor={"yellow"}
  editableColor={"#ffff00"}
  editableColor={"rgb(255, 255, 0)"}
```

#### onDelete

Function to remove row from the table

#### onAddNewRow

Function to add a new row to the table

#### onUpdate

Function to update data in a row
