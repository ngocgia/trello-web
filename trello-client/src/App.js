import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className='navbar app'>App Bar</nav>
      <nav className='navbar board'>Board Bar</nav>
      <div className='board-columns'>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYFRgYGhoaGBgaGBgYGhgYGBgaGRoYGBgcIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQAGBwj/xAA4EAACAQMCBAMFBwMEAwAAAAABAgADESEEMQUSQVFhcYEGEyKRoTJCscHR4fAUUoIVYnLxB5LC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEBAAMBAAMBAAAAAAAAARECIRIxQQMiUWEy/9oADAMBAAIRAxEAPwB6iNUSFEYqz0a4ICwwsILDCxoALCCQgsMLLqYWEhhIwLCCyaYWFhBYwCSBGmACyQsMLJtGmFhYXLDAk2kUu0i0ZadaAvlnWjLSCICyILCMIgkQFEQCI8iAVl1MJIgkRpEAiVSiIDRpEBhASRFsI5hFsIC+WdCnQLCiMAgKI1ZkEohgQVEYBAkCEBOAhAQOAhASQIQECAskLCAhAQoOWEFhWk2l1ABZNoVp1pAFp1odp1oC7SCIZE4iAsiCRGWgkQFkSCIZgkQFMIsiOYQGE0FEQGEYRBaShDCLYR7CLYRoTadDtOlD1EaogLGKJkEojFEFRDUQCAhCQBDAgSJMkCEBCuEITgIQECJM6VOIcRp0U56rhF+ZJ7ADJMFq1InjNV7eJn3aE26sQB8heZq+3tXN0S3TDYx5y4j6KDJng6ft42L0l7mzHa2PUmb3CvauhWwW923Z7AHybaLDW6YJEMGdIpZEgiMIglYTCzAIjSIJgwowDGEQSIMKIi2Emo4BAvOe0GFMIthGc/jBaNXC7TpNp0umLCCNWLSMWRRrDAggwwYQQhqIIhiFEBCAkCEIHCFOEH3gva+YGd7QcXTTUTUYcx2Rb253INhfoMXJ6AT4zxLitSvUL1HLEnyAHQKOgGMT0X/kXihqV+QH4aY5QP8AccsfwHpPHquI1ZBo5kK/4yKa4k8tpFGan4RumqkYvtARIuxB+kpj2/sr7WmkwpV2Jpk2DHJpk7G/9n4T6WJ+e2b6YPlPsvsRxA1dKlzdqfwN3wLr9CB6Rus2Z9N8wTDtAMGBaAxlatrlQkEzP4hxOwFup2kvUiNYmLdwJmVeJDkJDANbaYz8YPKBfY79TM3qQO43rbMOQ5G4HSL/ANaV6WbhrWvMzV6hCSwOSJlFiCLTle7vg3dHrit2JJA3F+s0m4lzWKi3e/aeRfU5JHXfzlmnxH4hnBwZZ1ng9R/qK9508/8A1aTpr5K9usYsUphrN60csNYpTGqY0waxgi1jBGgxCEAGZvFOMJTuL3YfSS0WNfxNKdwT8Vtp5mpx34wwOc4mHxDiJrOW2/SUUcBvtXnK938c9Y/GKpeq7HJLMfqf2lK8ta6xdvE3+sqv0nbXSRIbp/L3hMYBXAwcXljSpzK5tflsfrJevFkKDZxHMQReIqYOBe38vDSm7JzBCR3+Qk+S4Slj+E+hf+ONaESqGwL0/nZ/2nz56DI5DqVJsbEW3zPQcDqhEck5LY9MfrHy8Trx9bbVLa9xKb8RQ4J5fOeEbiz8vLzYhrrWdQSb22mb2561uJOqkur3N7ATIr6pm3yRA1L/AAgjfqJl6jVEeBnO3an21tM92uwJIFx2lTXak7EW/eDwzigUgsL9DKXEtUGckYBMv4uIavYXnLWLHxlRqtxY7CDTrECwmcXF5mwR1iFHUxSOYDfWA3m8Z0rc3jOmsqvqug1gceI3lk6hRuZ4/h+rZGv90mWK+q5XLE2G4E6ypr1xqqLXIF9o4NPn9biZZgObY3B7eE1NR7QtyAKBzdY+UNenTXoTYMCZGq4iEYBtupnitBxIjG5vg+MZxTiTshDYa+fASfLzUvT0Ws4wBs29reU83xTXB2a2x/Geeratj1MP+pxc9szn11aU0L3NryhUY7A5EN694o9+okhDdNR56tJWHwu4U+OM5+Xzmhq+ELQc87XUm62BJt5ASpwypd0J3SorDyLBT/8AM+jVqCuMgH0BnTfHfia8E2qo8xVVcW3utgLkCbfC+AI/M1uU/K/XabC8LQHmsJqcMpfamXWPnfEOGe62RnuSMdsnJ6bWlrh1RmRVXTWANrF7kAdT8AntH06tcESKejVdhE+iz15T2h4cpotUZbOqG30+cyq1H3dKmvLYsCSerXCn5C5HpPXcdUOjJ3FvnPO+0N6XuVJvYOM72BW1/GxEmsd8z42szSsOYX6TSqagA4tiZmnUO2GtaPekQZnp5jX1OPGVNRQDLzDBhUWG29pD6jBkJA0KSgZBvEamgARa9o6pUtZifSV6mov5y+rFesLYBuJFJfHrJZryU5d+s3+KcUz1WVa+DvDaucnxgag3F9+8zCB5p0VYTppW8uqG07Vazma98WtI/oiTZbbA+URqdOVBv/1NXWANW7Q11RiFS+ekaqi47TGNGUqjA3GM4MsVHJvc3JnU3AXAF74lfXVt+hixn7G1lBxcyCgtnteVKdW4tfeEahJAH8EkUCUmZsdIAvciXaT7gdop0xzGaVoezToKvLU2cci/8yysuehuose9p7bTVJ870ac7jl3BuD2I6z1fBnIUoTcobX8DkfjaMuOv8+vcelZrjEyavE66OUVLIALN3PXFvLM3X09gnLkm34b+U87xbixSo1MUmcrYEgMQbgHBAsN5q8dT7duf8r4u8MrVnv7wLv8ACR26Xv1l+rUsJgabjj9dO9rdBb8Zfq6y4yLHt2mL4vUsvqjxLWBPja9gRtvvPLcb4itZ+a5IAsoPQf8Ac1OPrzpvaxuB3NsfjPP6rQMgBP3pZz5rh31txZ0bLbtJfUWmSlYrcx6G4uZLHGw0VvivDaoMXtK1IC9z0gbk3mcUdV7nfHSFRpc+OtsGIYkfOWKNWzg9JqeFWn0t2UW5fh37mVa6kXHSa9PVXQHsbA9rzNriwPNuSM+s3Z/pJWdUwbdDJUXBjuIUQr8t8jPoZW2BMzmNK86WOVe06F16JOKBQ11yTbHQTMrV7g+JvKjNcnMYqXlvVZwdI75haVs5imYDaEjje8g1KNZButz38Imtpy5+H+CKpsGA79pscP0jMdsWveak1Hm3plWt2j6NMj4tsTeqcMDk2FmH1mfraQQFeo3meucNZyP8XnD1D4sJVCnmxHadCzKPH85Ip+jcqRyjJE9T7O8QqXKPZ6bK7cp3BBF+U9OvrKOk0XLXUCxDfpPW8G4QKZNSpbqEXpYkG5HptOm5Na429eLVPiKryL8XKcKWHKc2t5gW38ZW4zoi9mSy2vzMGHxenznce1N1sLE4Ivnr+l55tuKsu4kn9bll9embzdjToaIrkuW85U1taxsNztKbcUZ9pGnW7XJuZytOrb9qz1i1fl3C2Ge/WL4q3MbKu29+nlK1aoVqO21nNvQwdRqGckk4PptOsvjy37Z/ub9Ccx60TucDa0OhqzZVsMGDV1JBN8eElngqVRYmQji9/CS7iJImJBZexF5WR7NY5hKfpArDIMsWNbQFi3IcKReL4kxBKk7RdOuyor9ebETqW5iSdybzVvjOFVHvY5vaxg1GwB1kUckxbvc+Rmao7TovmnSLgveR/PiVAMx18TdhYlqk5GxAIxIMIuabUlWB7T0Gj4ic4sP1nl6bZHSbOgbntiw2MsLG9U4iPtrutr+PeZ/G3DfEBbmlLW1gGKjpvL+n4Tqa1IFKTMpN0JKrcdxzEXXxlvvjLI09G7X6d56jgHsm7tz1S1JPui1nb0P2R5/vN3gPAU0yoW5WqkEs5zynoqdgL77m01tVqwi/Fv0HaJzOZta55vVyFaXRUqI+EczdWaxb07ekr67Uub8qs5/tUfwCYup1Lu45GPMTgdPEnwmxS1HulC35j95urHqZy66+T1cczmZGWdNUC81RSrN035R0HnM3VaYET19M+/Q/dQ/e7n/b385g8V0pQ2vzAi4NrfOZyZ4W3fWLR01pZoJmSsfSTMJaJ/Z5ajBkuGYFvtY5xY8pW2xHNm+DbocN4hwjkRRyqxAtY43mxwxSCScC1lHXNiW8NgB5nwmnWpI68rqGx13Hkek9PPP+Przd58vHyBtK6OQwG/Q4ErVCxYjfvPb8Z9l3RHNAmoDnkOXHl/d+PhPCA8pPQi4N8EHqCOhmbMSUz3WJNVRCp2KFuezf2+EVUnPqBVPrBVbmEFtmLJN5FWPeXW3QZiHeczWx3iC0LINWsRAByZDGFTFzNKK06TeRMslAGHcwScTuedGhq8JYtTaTzSAjNbgvB9RqDy0lIUH4nPwovhfqfAXMd7J8E/qahLkiklufpzE7ID6ZPQeYn1ajSVFCqqqq4VVAAA8AJvnnWeqweD+zVGgOZ199UGWd9v8ABL2Fu5uZ6MVA1iMi0U6XyJS0z8jlPutdl8D1H87TpmMrOpez3OLCY2pqGoeVcnv08yZp65Q9x3Fgex6TD4TWC8/ObMDkeU4f13f+O/8AKzFmlp1pKT9pzu35DsIzQBXPPV+wD8K/3Hx8JSOo949ibAfT95V1uqJuMAISBYgWXocn+ZnKTXXcer1OuA+z6AfpMqvoWdWqM9vAg/Q/tI4VphyBi3MWGTfCj+0dz4y7Wrk/AoxbPgO03J/ti37xhUtKOrjysfztNLQaVQb2LW74A/xHXzMalLuLeOLSzSH/AH+k7TiRxvXVWaY/neWU2lQPBSvYkXm2FtnmNx7gFHUi7jkqWxUUZ/zH3x557GXnfM5Hj7R8q4rwOrpWtUW6HCuuUbwv90+B+spuy8uDtPsjhHUq6hlYWKsLgjsQZ8z9r+Af0zB6VzSckWOSjb8pPUEXt5Gc+uWpdYTOCN5C4M7BF4LtOalO8GGguZDjrDQSsLaFTOMyKsDp07mnQK15wMvDQjvI/pbE9ZdNirzYnDMsigPGHToZCjckD54jU2PqHs5wtaOnpi/MWXnYg4LPknxsLD/GXWDoeZWLj+w4x4eMBaTJbk2AA5elgLC3aPp1Q2Nj1H6TswdSrB1DKxF+h6HqDKfE7ryPg8rrc/7WNj+MF/gbmA+E/bz16Nb8ZOqp8ysAcMCPK43lDw24nm+OEJVYj74H/sBN6i+Obw+vaYfF6YcE9QQZx/p1+O3HP6zdLqOW9/tHaQtHnOTi+T+krVN7RgLAW5pxx0lxu0OLWtSRfBbfnNbTApg5J3PjPN8Eokvzf25P5T0gbtO/8+f1y763xZK9jOWBSe4hkzq5pdomTVeDfaENe/NJWC7dYitWtYDrAsO8yvaFQ+lrg5shYf8AJPiB+Ylzm6ytq1DUnU7FGB9VMVXy6mwvaRUEXSf52jS+DPPV/S1bFoLNg+cB94SDe8LiEaFVN4sHeGDuYUPKZMfzzpkXkNoYcDNgZWdxARj6RjC8rg9AI3RWaqg5Rl0F/wDISiKnMbCaXBaRNen25wbf8fi/KWT1H0dBOZBuIKA32x2jlaelAlbjO0opcEoTtlT3W+3pt8pZqKX8BK1QBet+3hff8vlM9XJrXM2urPYWG0z9QgtbqY53i3HUzz313jPfSgC9onTaIu4AwOp7CWauqOw2l7h68ov1b8OkvPO1OrkXaNIIoVBYfn3JnM/oZztcRZeelxFSaxveWleUbywrQDvc+UlDEUW3PeFTfMIdUMqF7t5Y+kdqKlgTKFBuveFWar48z+8iplCO4b6giIdruF6AXPrOr5DHpYgfIiB81XS7SHp2mvV046EMAJRqJ1OJwrasoAiap7Rjm14lhnEiRyJfM4Q7bYkNTMGozOnW8Z0mKJ3kU2JltdLffaPTSriNjKqjBfWbXssjtqEsMJzMx6BSpUfMkCUn0gyBgT2XCaKaekFHxu1mc7XPRb9gPzmuZtSt5OxjL+kqrqLAcwAPbMJNUCNp3tZkptR7DeZtV7xmorShVqzh11rvzzhpaU9TVvjpJ95KdapOdbhlBOZgPn5TVV5maQ2z3llKk7cTI49Xa0kfEFjK1OrGGpedWRK0Oq9kPl+OIlGzI1LfCB3I+mfygWqbYnFpXSpic73gBrqxt57SaAwJSrPd7dFH1j69QhDbc4XzOP39JFGlUfERkscnsNgPOwEai3FpVoLgAbL9T1Mu0sQjw5rXFhaLNO++0eqqM2tCYA+E8uig+lB6TkpBQLAHveWmxi8G3YeEmnpHIAb/ADkYMc6Yt9YAp9BmEK90vaRD5JMKYXvtJDRCtc2ksc2ELqwKneeq4QpZEYi+D6kEgX+U8awItPXezlQ+7te1mYemG/Mzp/L/ANJfpqGgftOfSRUrgDErV9TKdStNdda6884sVq0ps94tngO851odSpYWiVyYtnljSJgsfIRzNp1ch1J8w0fMr0zm0JWndxXFcRqP2lNXv5xtEZ7TSLiGVtfVsVHn+UeplHiByP53iiU1BPWNp1jk9gZQQxzNZG+XzxMjtObsT3lnUG5VR0z67D84jSLkfOMpkFiTtfHkMSqt0kAtHVjZG/4ketougCfKRq6mCOwN/lL+I8mwUiAV8YsNvF82MTx4h3NBc4tK5qd5y1b4lkFg5g+95RfrsYl7g4MUT+MYp/8AUDtOibidCv/Z" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://sapvuottocnam.com/wp-content/uploads/2020/05/toc-nam-han-quoc-3-min.jpg" alt="image_demo"/>
              Title: NGOCGIA
            </li>
            <li>Add what you'd like to work on below</li>
            <li>Add what you'd like to work on below 1</li>
            <li>Add what you'd like to work on below 2</li>
            <li>Add what you'd like to work on below 3</li>
            <li>Add what you'd like to work on below 4</li>
            <li>Add what you'd like to work on below 5</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;

