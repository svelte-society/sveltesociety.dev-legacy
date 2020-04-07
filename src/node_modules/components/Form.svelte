<style>
  form {
    background: white;
  }
</style>

<form>
  <label for="skill">A skill you have:</label>
  <input type="text" id="skill" name="skill" placeholder="Your skill" />
  <label for="model">Ideal business model:</label>
  <select id="model">
    <option value="bootstrapped">bootstrapped</option>
    <option value="venture-backed">funded</option>
  </select>
  <label for="job">What you did at your last job:</label>
  <textarea cols="32" rows="5" id="job" />
  <button type="submit">Submit</button>
</form>
