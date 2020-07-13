import React from "react";
import {Button, Modal} from "react-bootstrap";
import {SKIP_ADS} from "../../../queries/widgets/skipAds/index";
import {useQuery} from "@apollo/react-hooks";
import DOMPurify from "dompurify";

export default function SkipAdd() {
  const [modalShow, setModalShow] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(false);
    }, 5000);
    return () => setModalShow(false);
  }, []);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        // setModal={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
function MyVerticallyCenteredModal(props) {
  // for  fetching widgets
  const {loading, error, data} = useQuery(SKIP_ADS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <React.Fragment>
      {!data.sidebar.text === "" ? (
        <Modal
          {...props}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className='rd-ads'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.sidebar.text),
              }}></div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

// <script>
//     $(function () {
//         $('#myModal').modal('show').css({
//             'background': '#333'
//         }, {
//             'opacity': '0.5'
//         });
//         setTimeout(function () {
//             $('#myModal').modal('hide');
//         }, 5000);
//     });
// </script>
