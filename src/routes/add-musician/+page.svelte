<p>Add musician!</p>
<form method="POST" >

    <!-- Grid -->
    <div class="grid">
  
      <!-- Markup example 1: input is inside label -->
      <label for="firstname">
        First name
        <input type="text" id="firstname" name="firstname" placeholder="First name" required>
      </label>
  
      <label for="lastname">
        Last name
        <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
      </label>

      <label for="birthdate">
        Birth date
        <input type="date" id="birthdate" name="birthdate" placeholder="Birth date" required>
      </label>
    </div>
    <div class="grid">
        <label for="parentname">
            Parent name
            <input type="text" id="parentname" name="parentname" placeholder="Parent name" required>
        </label>
        <label for="address">
            Address
            <input type="text" id="address" name="address" placeholder="Address" required>
        </label>
        <label for="phonenumber">
            Phone number
            <input type="text" id="phonenumber" name="phonenumber" placeholder="Phone number" required>
        </label>
    </div>
    <div class="grid">
        <label for="maininstrument">
            Main Instrument
            <select id="maininstrument" name="maininstrument" placeholder="Main instrument" required>
                <option>A</option>
                <option>B</option>
            </select>
        </label>
        <label for="maininstrument">
            Secondary Instrument
            <select  id="secondaryinstrument" name="secondaryinstrument" placeholder="Secondary instrument">
                <option>A</option>
                <option>B</option>
            </select>
        </label>
    </div> 
    <div class="grid">
        <label for="sex">
        Sex
        <select id="sex" name="sex" placeholder="Sex" required>
            <option>M</option>
            <option>F</option>
        </select>
        </label>
        <label for="student">
            Student
            <select id="student" name="student" placeholder="Student?" required>
                <option>YES</option>
                <option>NO</option>
            </select>
            </label>
            <label for="Guest">
                Guest
                <select id="guest" name="guest" placeholder="guest" required>
                    <option>YES</option>
                    <option>NO</option>
                </select>
                </label>
    </div>
  
    <!-- Button -->
    <button type="submit">Submit</button>
  
</form>