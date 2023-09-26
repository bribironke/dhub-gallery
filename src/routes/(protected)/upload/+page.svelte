<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData

</script>

<h1>Upload Picture</h1>
<form action="?/upload" method="post">
  <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
  
  <button type="submit">Login</button>
</form>