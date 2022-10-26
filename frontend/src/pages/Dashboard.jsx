import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import EventForm from '../components/EventForm'
import EventItem from '../components/EventItem'
import EventsCards from '../components/EventsCards'
import Spinner from '../components/Spinner'
import { getEvents, reset } from '../features/events/eventSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { events, isLoading, isError, message } = useSelector((state) => state.events )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/landing')
    }
    dispatch(getEvents())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className='heading'>
      <h2>Hello, {user.name}! </h2>
    </section>
    <Container >
      <Row>
        <Col>
          <EventsCards/>
         </Col>
        <Col>
          <section className='content col-sm m-5'>
            {events.length > 0 ? (
              <div >
                <h3 className='m-3'>Your events:</h3>
        
                {events.map((event) => (
                  <EventItem key={event._id} event={event} />
                ))}
              </div>
            ) : (
              <h3>You have not shared any events</h3>
            )}
            <div className='form-group '>
              <button className='btn-me btn-block mt-5' onClick={()=>navigate('/create')}>
                  Create on other event
              </button>
             </div>
          </section>
        </Col>
          
      </Row>
    </Container>

  
  </>
  )}


export default Dashboard
