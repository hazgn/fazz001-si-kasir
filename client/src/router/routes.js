import HomeView from "../views/Home.vue";
import TransactionsView from "../views/Transactions.vue";
import TransactionDetailView from "../views/TransactionsDetail.vue";
import NotFoundView from "../views/NotFound.vue";

export default [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/transactions",
    component: TransactionsView,
  },
  {
    path: "/transactions/:id",
    component: TransactionDetailView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];
