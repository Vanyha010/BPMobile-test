import langProvider from "./langProvider";

export class App {
  constructor() {
    this.data = {};
  }

  async start() {
    await this.parseData();
    this.createHeading();
  }

  async parseData() {
    this.data = await langProvider();
  }

  createHeading() {
    const heading = document.createElement('h1');
    heading.innerHTML = Object.values(this.data)[0];
    document.body.append(heading);
  }
}