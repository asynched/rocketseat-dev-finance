<script lang="ts">
  import { expenseStore } from '@/stores'

  export let deRender: () => void
  export let render: boolean

  const categories = [
    {
      id: 'income',
      name: 'Entradas',
    },
    {
      id: 'food',
      name: 'Comida',
    },
    {
      id: 'home',
      name: 'Casa',
    },
    {
      id: 'recurring',
      name: 'Recorrente',
    },
  ]

  let description = ''
  let value = ''
  let date = ''
  let category = categories[0].id

  const isValid = (data: IncomeRegisterType) => {
    if (data.category.length < 0) {
      return false
    }

    if (data.title.length < 0) {
      return false
    }

    if (isNaN(data.price)) {
      return false
    }

    if (isNaN(Date.parse(data.date.toDateString()))) {
      return false
    }

    return true
  }

  const handleSave = () => {
    const data = {
      category,
      price: +value,
      title: description,
      date: new Date(date),
    }

    if (!isValid(data)) {
      alert('Erro ao cadastrar, dados inválidos.')
      return
    }

    expenseStore.update((state) => {
      state.items.push(data)
      return state
    })

    deRender()
  }
</script>

{#if render}
  <div class="modal-overlay">
    <div class="modal">
      <h1 class="title">Nova transação</h1>
      <form class="transaction-form" on:submit|preventDefault={handleSave}>
        <input type="text" bind:value={description} placeholder="Descrição" />
        <input type="text" bind:value placeholder="Valor" />
        <input type="date" bind:value={date} placeholder="Data" />
        <select bind:value={category}>
          <option selected disabled hidden> Escolha uma opção </option>
          {#each categories as category}
            <option value={category.id}>{category.name}</option>
          {/each}
        </select>
        <div class="form-buttons">
          <button class="cancel" type="button" on:click={deRender}>
            Cancelar
          </button>
          <button class="save" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  div.modal-overlay {
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
  }

  div.modal {
    padding: 2rem;
    width: 90%;
    max-width: 512px;
    background: var(--background);
  }

  div.modal h1 {
    margin-bottom: 1rem;
  }

  div.modal,
  div.modal input,
  div.modal input::placeholder,
  div.modal select {
    color: var(--dark-text);
  }

  div.modal input,
  div.modal select {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;

    background: var(--white);

    border: none;
    border-radius: 0.25rem;

    outline: none;
  }

  div.modal input:focus,
  div.modal select:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }

  div.modal select {
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 96.5%;
    background-position-y: calc(1rem / 2 - 2px);
  }

  div.modal h1 {
    font-weight: 500;
  }

  div.modal form {
    display: flex;
    flex-direction: column;
  }

  div.modal div.form-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  div.modal div.form-buttons button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
  }

  div.modal div.form-buttons button.cancel {
    border: 2px solid var(--red);
    color: var(--red);
    background: transparent;
  }

  div.modal div.form-buttons button.cancel:hover {
    background: var(--red);
    color: var(--absolute-white);
  }

  div.modal div.form-buttons button.save {
    background: var(--green);
    color: var(--absolute-white);
  }

  div.modal div.form-buttons button.save:hover {
    filter: brightness(0.9);
  }
</style>
