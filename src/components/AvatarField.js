import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    avatar:{
        width:'3em',
        height:'3em',
        borderRadius:'50%'
    }
};

const AvatarField = ({ record = {}, source, classes }) =>
    <img src={record[source]} className={classes.avatar} alt='头像'>
       
    </img>;

export default withStyles(styles)(AvatarField);