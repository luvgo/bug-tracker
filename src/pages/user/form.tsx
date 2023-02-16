const SubmitForm = () => {
  return (
    <>
      <h1>Submit Form</h1>
      <form>
      <label htmlFor="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname"/><br/>
      <label htmlFor="lname">Last name:</label><br/>
      <input type="text" id="lname" name="lname"/>
      <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SubmitForm;
