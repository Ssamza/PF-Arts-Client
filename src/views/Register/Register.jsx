import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import googleLogo from '../../assets/img/google.png';
import { postUsers } from '../../redux/actions';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    userName: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function validate(input) {
    let errors = {};
    if (!input.userName) {
      errors.userName = 'Need a user';
    }
    if (!input.email) {
      errors.email = 'Need an email';
    } else if (
      !/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(input.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setShowAlert(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(input);
    setErrors(errors);
    setSubmitted(true);

    if (Object.keys(errors).length === 0 && input.userName && input.email) {
      const updatedInput = {
        ...input,
      };
      dispatch(postUsers(updatedInput));
      setShowConfirmation(true);
      setInput({
        userName: '',
        email: '',
      });
      setSubmitted(false);
      setErrors({});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      navigate('/');
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['landing-text']}>
        <div className={styles['landing-title']}>
          <h2>Welcome to Henry Art Gallery!</h2>
        </div>
        <p>
          Discover a world of artistic inspiration and talent at HenryArt
          Gallery, a premier platform dedicated to showcasing emerging artists.
          <br />
          <br />
          Our mission is to provide a space where artists can share their work,
          connect with fellow creatives, and find endless inspiration.
        </p>
      </div>
      <Container className='w-100 bg-primary rounded shadow'>
        {/* Background */}
        <Row className={`${styles['bg-box']} align-items-stretch`}>
          <Col className='d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded'></Col>
          {/*  */}

          <Col className='bg-white p-3 p-md-5 rounded-end'>
            <div className='logo-box text-center'>
              {/* <Image src='./img/logo.jpg' id='logo' width='100' alt='' /> */}
            </div>
            <h2 className='fw-bold text-center py-3 py-md-5'>
              Create an account
            </h2>
            <div className='register'>
              <Form id='register' onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='userName'>User</Form.Label>
                  <Form.Control
                    type='text'
                    name='userName'
                    value={input.userName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder='Enter a user'
                  />
                  {errors.userName && (
                    <p className={styles.error}>{errors.userName}</p>
                  )}
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='email'>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder='Enter an email'
                  />
                  {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </Form.Group>
                <div className='d-grid'>
                  <Button
                    variant='primary'
                    type='submit'
                    id='ingresar'
                    className='btn-sm'
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </div>
                {showConfirmation && (
                  <p className={styles.confirmation}>
                    Account created successfully!
                  </p>
                )}
                <div className='mb-3'>
                  <p className='text-danger mt-2' id='mensaje'></p>
                  {/* ERRORS */}
                  <NavLink to='/login'>Log in</NavLink>
                </div>
              </Form>
              {/* LOGIN REDES SOCIALES */}
              <Container className='w-100 my-3'>
                <Row>
                  <Col>
                    <Button variant='outline-danger' className='w-100 my-1'>
                      <Row className='align-items-center'>
                        <Col xs={1} className='d-block'>
                          <Image src={googleLogo} width='24' alt='' />
                        </Col>
                        <Col xs={10} md={10} className='text-center'>
                          Log in with Google
                        </Col>
                      </Row>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
