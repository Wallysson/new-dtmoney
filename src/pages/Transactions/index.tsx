import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant='income'>
                  R$ 12.000,00
                </PriceHightlight>
              </td>
                <td>Venda</td>
                <td>13/04/2022</td>
            </tr>

            <tr>
              <td>Internet</td>
              <td>
                <PriceHightlight variant="outcome">
                  - R$ 80,00
                </PriceHightlight>
              </td>
              <td>Conta</td>
              <td>23/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}