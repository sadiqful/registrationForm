import React from 'react';
import useForm from './useForm'
import './styles.css'

const Register = () => {
  const [loading, setLoading] = useState(false)
  
  const formRegister = () => {
    setLoading(true)
    register({
      name: values.name,
      email: values.email,
      password: values.password,
    })

  const {values, handleChange, handleSubmit, errors} = useForm(
    formRegister,
    validate,
  )


  return (
    <Layout>
      <Header as="h1">Registration Form</Header>
      <Form className="form-control" onSubmit={handleSubmit} loading={loading} error={!!errors}>
        <Segment>
          <div className="form-comtrol">
            <label htmlFor="name">First Name</label>
            <Input
              id="f-name"
              name="name"
              place="Enter first Name"
              autoFocus
              onChange={handleChange}
              value={values.name || ''}
            />
          </div>
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

          <div className="form-comtrol">
            <label htmlFor="name">Last Name</label>
            <Input
              id="l-name"
              name="name"
              place="Enter Last Name"
              autoFocus
              onChange={handleChange}
              value={values.name || ''}
            />
          </div>
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              place="Enter email address"
              onChange={handleChange}
              value={values.email || ''}
            />
          </div>
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              place="Enter Password"
              onChange={handleChange}
              value={values.password || ''}
            />
          </div>
          {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

          <div className="form-control">
            <label htmlFor="c-pass">Confirm Password</label>
            <Input
              id="c-pass"
              name="c-pass"
              type="password"
              place="Confirm Password"
              onChange={handleChange}
              value={values.confirmPassword || ''}
            />
          </div>
          {errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}

          <div className="form-control">
            <label htmlFor="website">URL</label>
            <Input
              id="url"
              name="url"
              type="url"
              place="Enter a URL"
              onChange={handleChange}
              value={values.url || ''}
            />
          </div>
          {errors.url && <p style={{color: 'red'}}>{errors.url}</p>}


          <div className="check">
            <label htmlFor="accept">
              I accept the terms and conditions 
            </label>
            <Input
              id="accept"
              name="accept"
              type="checkbox"
              onClick={handleSubmit}
              value={values.checked || ''}
            />
          </div>
          {errors.check && <p style={{color: 'red'}}>{errors.check}</p>}


          <Button type="submit"> submit </Button>
        </Segment>
      </Form>
    </Layout>
  )
}


const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'This value is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'This value is required'
  }
  if (!values.name) {
    errors.name = 'This value is required'
  }

  if(!values.confirmPassword){
    errors.confirmPassword = 'This value is required'
  }

  if(!values.url) {
    errors.url = 'This value is required'
  }

  if(!values.check) {
    errors.check = 'You have to agree to the T/C'
  }
  return errors
}