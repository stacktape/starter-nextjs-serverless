import { NextjsWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new NextjsWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
