import {useUserStore} from "@/store/user-store.js";

export  default function ProfileToken() {
    const user = useUserStore(state => state.user);

    return (
        user && (
            <div className={"absolute top-2 left-2 flex flex-row items-center"}>
                <img src={user.picture} alt={user.name} className={"rounded-full w-8"} />
                <div className={"text-xs ml-2"}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    );
}
