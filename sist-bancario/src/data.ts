import { user, conta } from "./types";

export const users: user[] = [
   {
      nome: "Joana da Silva",
      cpf: "000.000.000-01",
      nascimento: "27/01/1987"
   }

]

export const contas: conta[] = [
   {
      cpf: "000.000.000-01",
      saldo: 0,
      extrato: [
         {
            data: "30/08/2021",
            valor: -30
         },
         {
            data: "05/09/2021",
            valor: 2500
         },
         {
            data: "15/09/2021",
            valor: -530
         },
         {
            data: "19/09/2021",
            valor: -200
         },
      ]
   },

]




