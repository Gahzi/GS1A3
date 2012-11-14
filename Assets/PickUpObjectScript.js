private var pickObj: Transform = null;
private var hit: RaycastHit;
private var dist: float;
private var newPos: Vector3;

function Update(){

    if (Input.GetMouseButton(0)){ // if left button creates a ray from the mouse
        var ray = Camera.main.ScreenPointToRay(new Vector2(Screen.width / 2, Screen.height / 2));
        if (!pickObj){ // if nothing picked yet...
        	Debug.Log("PickObj = null");
            if (Physics.Raycast(ray, hit) && hit.transform.tag == "Pick"){
                // if it's a rigidbody, zero its physics velocity
                Debug.Log("Hit our object with a raycast");
                if (hit.rigidbody) hit.rigidbody.velocity = Vector3.zero;
                pickObj = hit.transform; // now there's an object picked
                pickObj.gameObject.renderer.enabled = false;
                Debug.Log("renderer is false");
                // remember its distance from the camera
                dist = Vector3.Distance(pickObj.position, Camera.main.transform.position);
            }
        }
        else { // if object already picked...
            newPos = ray.GetPoint(dist); // transport the object
            pickObj.position = newPos;   // to the mouse position 
        }    
    }
    else { // when button released free pickObj
        pickObj = null;
    }
}