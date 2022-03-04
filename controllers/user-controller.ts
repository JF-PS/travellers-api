import { Request, Response } from "express";

const userController = (service: any) => ({
  signIn(req: Request, res: Response) {
    return service
      .signIn(req.body)
      .then((authUser: void) => {
        res.status(201).send(authUser);
      })
      .catch((err: any) => {
        res.status(500).send(err);
      });
  },

  signUp(req: Request, res: Response) {
    return service
      .signUp(req.body)
      .then((authUser: any) => {
        res.status(201).send(authUser);
      })
      .catch((err: any) => {
        res.status(500).send(err);
      });
  },

  validate(req: Request, res: Response) {
    const { token } = req.params;
    return service
      .validate(token)
      .then((authUser: any) => {
        res.status(201).send(authUser);
      })
      .catch((err: any) => {
        res.status(500).send(err);
      });
  },
});

export default userController;
