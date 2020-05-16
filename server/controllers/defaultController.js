import DataModel from '../data/dataConnecter';
import validate from '../data/dataConnecter';
import dataModelSchema  from '../data/dataConnecter';

const router = express.Router();

router.get('/', async (req, res) => {
  const table = await DataModel.find().sort('name');
  res.send(tables);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let table = new DataModel({ name: req.body.name });
  table = await table.save();
  
  res.send(table);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const table = await table.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!table) return res.status(404).send('The table with the given ID was not found.');
  
  res.send(table);
});

router.delete('/:id', async (req, res) => {
  const table = await table.findByIdAndRemove(req.params.id);

  if (!table) return res.status(404).send('The table with the given ID was not found.');

  res.send(table);
});

router.get('/:id', async (req, res) => {
  const table = await table.findById(req.params.id);

  if (!table) return res.status(404).send('The table with the given ID was not found.');

  res.send(table);
});

export {
    router,
}