import { IPlugin, registerPlugin, logger } from "@dottless/plugin";

const plugin: IPlugin<any, any, any> = {
  id: "my-plugin",
  name: "My Plugin",
  version: "1.0.0",
  description: "My first plugin",
  load() {
    logger.log(this.id, "Loaded");
  },
  read(event: string, data: any) {
    if (event === "greet") {
      console.debug(this.name, `Received event "${event}" with data`, data);
      // do something
      return "Hello, world!";
    }
    return undefined;
  },
  process(event: string, data: any) {
    console.debug(this.name, `Received event "${event}" with data`, data);
    // do something
  },
};

registerPlugin(plugin);
