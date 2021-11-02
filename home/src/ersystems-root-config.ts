import { registerApplication, start } from "single-spa";

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

registerApplication({
  name: "@ersystems/navbar",
  app: () => System.import("@ersystems/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@ersystems/products",
  app: () => System.import("@ersystems/products"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@ersystems/cart",
  app: () => System.import("@ersystems/cart"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
