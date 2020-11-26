  
export declare class Logo {
	angrycat(thingy): Promise<Client.angrycatResults>;
}

declare namespace Client {
    export interface angrycatResults {
        url?: string;
    }
}