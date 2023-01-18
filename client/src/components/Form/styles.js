import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    background: 'linear-gradient(150deg, #0322eb 0%, #07B3E7 100%)',
    '&:hover': {
      background: 'linear-gradient(150deg, #07B3E7 0%, #0322eb 100%)',
    }
  },
  
  buttonClear: {
    background: 'linear-gradient(102deg, #ff0008 0%, #f13aae 100%)',
    '&:hover': {
        background: 'linear-gradient(102deg, #f13aae 0%, #ff0008 100%)'
    }
},
}));