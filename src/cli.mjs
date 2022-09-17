import serve from 'create-serve';
import chokidar from 'chokidar';
const root = process.argv[2] ?? process.cwd();
serve.start({ root, live: true });
chokidar.watch(root).on('all', () => serve.update());
