import Model from 'ember-data/model';
import Attr from 'ember-data/attr';
export default Model.extend({
  title: Attr(),
  owner: Attr(),
  city: Attr(),
  category: Attr(),
  image: Attr(),
  bedrooms: Attr(),
  description: Attr()
});
