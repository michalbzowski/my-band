<script >
    export let data;
</script>
<details>
  <summary>JsonForDebug></summary>
  <pre>{JSON.stringify(data, null, 2)}</pre>
</details>
 
<table role="grid">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Bith date</th>
          <th scope="col">Phone</th>
          <th scope="col">Instrument</th>
          <th scope="col">Student</th>
          <th scope="col">Guest</th>
        </tr>
      </thead>
      <tbody>
        {#each data.musicians as d, i}
        <tr>
          <th scope="row">{i+1}</th>
          <td>{d.firstName}</td>
          <td>{d.lastName}</td>
          <td>Cell</td>
          <td>{d.phoneNumber}</td>
          <td>Cell</td>
        </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th scope="col">#</th>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
        </tr>
      </tfoot>
</table>