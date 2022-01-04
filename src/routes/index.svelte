<script lang="ts">
  import { useModal } from '@/lib/hooks/useModal'

  import Header from '@/components/Header.svelte'
  import ExpenseCards from '@/components/ExpenseCards.svelte'
  import ExpensesTable from '@/components/ExpenseTable.svelte'
  import NewTransactionModal from '@/components/NewTransactionModal.svelte'

  const [renderNewTransactionModal, toggleNewTransactionModal] = useModal()
</script>

<main>
  <NewTransactionModal
    render={$renderNewTransactionModal}
    deRender={toggleNewTransactionModal}
  />
  <div class="heading">
    <Header />
    <ExpenseCards />
  </div>

  <section class="expenses container">
    <div class="transaction-buttons">
      <button on:click={toggleNewTransactionModal}>+ Nova transação</button>
      <button>Editar transações</button>
    </div>
    <ExpensesTable />
  </section>
</main>

<style>
  :global(:root) {
    --white: #fff;
    --red: #e92929;
    --green: #49aa26;
    --dark-green: #2d4a22;
    --light-green: #3dd705;

    --dark-text: #363f5f;
    --light-text: #969cb3;
    --background: #f0f2f5;
    --border-radius: 0.25rem;
    --absolute-white: #fff;
  }

  :global([data-theme='dark']) {
    --background: #202020;
    --white: #282828;
    --dark-text: #ccc;
    --light-text: #aaa;
  }

  :global(.container) {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
  }

  :global(body) {
    background: var(--background);
  }

  :global(*) {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  div.heading {
    background: var(--dark-green);
    color: var(--absolute-white);
    margin-bottom: 8rem;
  }

  div.transaction-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  div.transaction-buttons button {
    border: none;
    background: transparent;
    color: var(--green);
    cursor: pointer;
  }
</style>
