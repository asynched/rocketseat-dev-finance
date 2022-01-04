<script lang="ts">
  import { get } from 'svelte/store'
  import { expenseStore } from '@/stores'
  import { downloadIncomeRegisters } from '@/lib/file-handler'
  import Sun from './icons/Sun.svelte'
  import Moon from './icons/Moon.svelte'

  let theme = 'light'

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
      theme = 'dark'
      return
    }

    theme = 'light'
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const handleExport = () => {
    const expenses = get(expenseStore)
    downloadIncomeRegisters(expenses.items)
  }
</script>

<header class="container">
  <h1>Finance</h1>
  <div>
    <h1>Listagem</h1>
    <h1>Importar</h1>
    <h1 on:click={handleExport}>Exportar</h1>
    <button on:click={toggleTheme} class="theme-toggler">
      {#if theme === 'dark'}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
  </div>
</header>

<style>
  header {
    padding: 1rem 0;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header h1 {
    font-weight: 500;
  }

  header div {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.6rem;
  }

  header button.theme-toggler {
    width: 1.75rem;
    height: 1.75rem;
    color: var(--absolute-white);
    right: 0%;
    border: none;
    background: none;
  }
</style>
