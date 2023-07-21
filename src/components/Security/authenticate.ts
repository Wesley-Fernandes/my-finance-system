import supabase from "@modules/supabase/supabase";

interface havePermissionProps{
    user_session: string|null|undefined;
    setAuth: (value: "loading" | "unprotected" | "not allowed" | "is allowed") => void;
    path: string;
}

interface authenticateProps{
    haveSession: ({path,setAuth}:haveSessionProps) => void;
    havePermission: ({path,setAuth,user_session}:havePermissionProps) => void;
}


interface haveSessionProps{
    setAuth: (value: "loading" | "unprotected" | "not allowed" | "is allowed") => void;
    path: string;
}


//Verify if have a session data in localstorage
async function haveSession({ path, setAuth}: haveSessionProps) {
  console.log("checking if a user is auth");
  const user_localstore: string | null = localStorage.getItem("user_my_finance");
        
  const status =  typeof(user_localstore) == null;
      switch (!status) {
        case false:
          //User founded
          if (user_localstore) {
            const user_session: string = await JSON.parse(user_localstore);
            havePermission({ path, user_session, setAuth });
          }
          break;
        case true:
              //User not founded
            havePermission({
              path,
              setAuth,
              user_session: user_localstore,
            });
          

          break;
      }
}

//Verify if user have permission
async function havePermission({ path, setAuth, user_session }: havePermissionProps) {
    const unprotected_routes: string[] = ["/", "/Login", "/Register"];
    switch (unprotected_routes.includes(path)) {
        case true:
            //unprotected
            setAuth("unprotected");
            break;
        case false:
            switch (!!user_session) {
                case true:
                    //Is allowed
                    setAuth("is allowed");
                    break;
                case false:
                    //Is not allowed
                    setAuth("not allowed");
                    break;
            }
            break
    }
}


export default {havePermission, haveSession}