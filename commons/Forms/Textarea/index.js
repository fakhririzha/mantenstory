import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useStyles from './styles';

const Textarea = ({
    name = '',
    disabled = false,
    onChange = () => {},
    value = '',
    label = '',
    fullWidth = true,
    error = false,
    errorMessage = '',
    variant = 'standard',
    ...other
}) => {
    const styles = useStyles();

    return (
        <div style={styles.container}>
            <FormControl disabled={disabled} fullWidth={fullWidth} error={error} variant={variant}>
                <TextField
                    id={name}
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Insert Review"
                    error={error}
                    helperText={
                        error && (
                            <Typography variant="span" color={error ? 'red' : 'default'}>
                                {errorMessage}
                            </Typography>
                        )
                    }
                    {...other}
                />
            </FormControl>
        </div>
    );
};

export default Textarea;
