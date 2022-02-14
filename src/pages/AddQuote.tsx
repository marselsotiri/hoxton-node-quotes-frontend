function AddQuote() {
    return (
      <form
        className="add-quote-form"
        onSubmit={(event) => {
          event.preventDefault();
          const formEl = event.target as HTMLFormElement & {
            content: HTMLInputElement;
            firstName: HTMLInputElement;
            lastName: HTMLInputElement;
            age: HTMLInputElement;
            image: HTMLInputElement;
          };
          const newQuote = {
            content: formEl.content.value,
            firstName: formEl.firstName.value,
            lastName: formEl.lastName.value,
            age: Number(formEl.age.value),
            image: formEl.image.value
          };
          fetch("http://localhost:4000/quotes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuote)
          })
            .then((resp) => resp.json())
            .then((parsedResp) => {
              if (parsedResp.errors) {
                console.log(parsedResp.errors);
              } else {
                console.log("Quote added successfully");
              }
            });
          formEl.reset();
        }}
      >
        <label>
          Content: <input type="text" name="content" required />
        </label>
        <label>
          First Name: <input type="text" name="firstName" required />
        </label>
        <label>
          Last Name: <input type="text" name="lastName" required />
        </label>
        <label>
          Age: <input type="number" name="age" required />
        </label>
        <label>
          Image: <input type="url" name="image" required />
        </label>
        <button type="submit"> Submit</button>
      </form>
    );
  }
  
  export default AddQuote;