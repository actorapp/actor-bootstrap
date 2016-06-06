package im.actor.server.bootstrap

import im.actor.server.ActorServer

import scala.concurrent.Await
import scala.concurrent.duration.Duration

object Main extends App {
  val startedServer =
    ActorServer
      .newBuilder
      .start()
  val system = startedServer.system

  Await.result(system.whenTerminated, Duration.Inf)
}
