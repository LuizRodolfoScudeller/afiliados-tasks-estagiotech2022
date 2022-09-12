export type TypeStoreContextOBJ = {
    email: String;
    setEmail: any;
    notification: React.ReactNode;
    setNotification: any;
    cloud: React.ReactNode;
    setCloud: any;
  };

export type TypeDownloadContent = {
  title: string
  percent: number
  status: "active" | "normal" | "exception" | "success" | undefined
}
