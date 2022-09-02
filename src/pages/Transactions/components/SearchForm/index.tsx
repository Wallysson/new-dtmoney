import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContext } from "react";

const searchFormScheme = zod.object({
  query: zod.string()
})

type SearchFormImputs = zod.infer<typeof searchFormScheme>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const { 
    register, 
    handleSubmit,
    formState: { 
      isSubmitting
    }
  } = useForm<SearchFormImputs>({
    resolver: zodResolver(searchFormScheme)
  })

  async function handleSearchTransactions(data: SearchFormImputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Pesquise por transações"
        {...register('query')}

      />
      <button 
        type="submit"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}