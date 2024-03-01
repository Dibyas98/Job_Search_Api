const express = require("express");
const route = express.Router();
const jobcontrol = require('../control/job')

route.post("", jobcontrol.createJob)

route.get("", jobcontrol.getJob)
route.get("/:id", jobcontrol.getJobById)
route.patch("/:id",jobcontrol.updateJob)
route.delete("/:id",jobcontrol.deleteJob)

module.exports = route;
