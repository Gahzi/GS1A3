#pragma strict
private var pickObj: Transform = null;
private var hit: RaycastHit;
private var dist: float;
private var newPos: Vector3;
public var reach = 3f;

function Update(){
	var straight = transform.TransformDirection(Vector3.forward);
    if (Input.GetMouseButton(0)){ // if left button creates a ray from the mouse
        //var ray = Camera.main.ScreenPointToRay(new Vector2(Screen.width * 0.5f, Screen.height ));
        //if (!pickObj){ // if nothing picked yet...
        	//Debug.Log("PickObj = null");
        	
        	//Debug.Log(gameObject.transform.position);
        	
          if (Physics.Raycast(gameObject.transform.position, straight, hit, reach)){
          
          		if (hit.collider.gameObject.layer == 9)
          		{
	          		Debug.Log(hit.collider.gameObject.name);
	          		//Debug.Log(hit.transform.tag);
	                // if it's a rigidbody, zero its physics velocity
	                //Debug.Log("Hit our object with a raycast");
	                //if (hit.rigidbody){ 
	                	//hit.rigidbody.velocity.y = 2;
	                
	                pickObj = hit.transform; // now there's an object picked
	                pickObj.gameObject.renderer.enabled = false;
	                pickObj.gameObject.active = false;
	                //Debug.Log("renderer is false");
	                // remember its distance from the camera
	                dist = Vector3.Distance(pickObj.position, Camera.main.transform.position);
            	}
            }
        //}
        //else { // if object already picked...
        //    newPos = ray.GetPoint(dist); // transport the object
        //    pickObj.position = newPos;   // to the mouse position 
        //}    
    }
    //else { // when button released free pickObj
    //    pickObj = null;
    //}
}