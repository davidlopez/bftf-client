<script lang="ts">
  import { onMount } from 'svelte';
  import obituaryPdf from '../../assets/troy_raines_obituary.pdf';

  onMount(() => {
    window.location.replace(obituaryPdf);
  });
</script>

<a href={obituaryPdf}>Open Troy Raines obituary PDF</a>
