<script lang="ts">
  import { formatPrice } from '@/utils/formatters'
  import { expenseStore } from '@/stores'
</script>

<section class="cards container">
  <div class="card income">
    <p>Entradas</p>
    <h1>{formatPrice($expenseStore.income)}</h1>
  </div>
  <div class="card expenses">
    <p>Saídas</p>
    <h1>{formatPrice($expenseStore.expenses)}</h1>
  </div>
  <div class="card total">
    <p>Total</p>
    <h1>{formatPrice($expenseStore.total)}</h1>
  </div>
</section>

<style>
  section.cards {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  div.card {
    margin-bottom: -3rem;
    padding: 1.5rem 2rem;
    border-radius: var(--border-radius);
    background: var(--white);
    color: var(--dark-text);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  }

  div.card h1 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.75rem;
  }

  div.card.expenses h1 {
    color: var(--red);
  }

  div.card.total {
    background: var(--green);
    color: var(--white);
  }

  @media (max-width: 900px) {
    section.cards {
      grid-template-columns: 1fr;
    }

    div.card {
      margin: 0 auto;
      margin-bottom: 0.5rem;
      width: 100%;
    }

    div.card:last-child {
      margin-bottom: -3rem;
    }
  }
</style>
