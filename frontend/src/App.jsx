function App() {
  return (
    <div>
      <h1>Task manager</h1>
      <form action="">
         <label htmlFor="name">Name</label>
         <input id="name" type="text" />
         <label htmlFor="description">Description</label>
         <input id="description" type="text" />
         <label htmlFor="expirationDate">Expiration Date</label>
         <input id="expirationDate" type="date" />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default App
