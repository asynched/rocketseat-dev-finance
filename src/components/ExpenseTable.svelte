<script lang="ts">
  import { formatDate, formatPrice } from '@/utils/formatters'
  import { expenseStore } from '@/stores'

  import HomeIcon from './icons/Home.svelte'
  import IncomeIcon from './icons/Income.svelte'
  import ExpenseIcon from './icons/Expense.svelte'
  import ShoppingBagIcon from './icons/ShoppingBag.svelte'

  const icons = {
    home: HomeIcon,
    income: IncomeIcon,
    expense: ExpenseIcon,
    food: ShoppingBagIcon,
  }
</script>

<table>
  <thead>
    <tr>
      <th>Título</th>
      <th>Preço</th>
      <th>Categoria</th>
      <th>Data</th>
    </tr>
  </thead>
  <tbody>
    {#each $expenseStore.items as item}
      <tr>
        <td>{item.title}</td>
        <td class:expense={item.price < 0}>{formatPrice(item.price)}</td>
        <td class="category">
          <svelte:component this={icons[item.category]} />
        </td>
        <td>{formatDate(item.date)}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1rem;
  }

  table thead tr th {
    padding: 0 1rem;
    text-align: left;
    font-weight: 400;
    color: var(--light-text);
  }

  table tbody tr td {
    padding: 1rem;
    color: var(--dark-text);
  }

  table tbody tr {
    background: var(--white);
    overflow: hidden;
  }

  table tbody tr td:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  table tbody tr td:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  :global(table tbody tr td svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  table tbody tr td.expense {
    color: var(--red);
  }
</style>
