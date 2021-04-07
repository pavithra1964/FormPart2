import  React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './screen/Form';
import FlatListBasics from './screen/mainscreen';
import history from './screen/history';

const BaseRouter = () => (
    <div>
        <Switch>
        <Route exact path='/' component={Form} />
        <Route exact path='/Home/' component={FlatListBasics} />
        </Switch>
    </div>
);

export default BaseRouter;
