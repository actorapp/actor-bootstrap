import dsl._
import Keys._

scalaVersion := "2.11.8"

resolvers += Resolver.sonatypeRepo("releases")
resolvers += Resolver.sonatypeRepo("snapshots")

libraryDependencies += "im.actor.server" % "actor-server-sdk" % "3.0.0"

enablePlugins(JavaServerAppPackaging)
enablePlugins(JDebPackaging)

name := "actor-bootstrap"

maintainer := "Actor LLC <oss@actor.im>"
packageSummary := "Messaging platform server"
packageDescription := "Open source messaging platform for team communications"
version in Debian := version.value
debianPackageDependencies in Debian ++= Seq("java8-runtime-headless")

rpmVendor := "actor"

daemonUser in Linux := "actor"
daemonGroup in Linux := (daemonUser in Linux).value

bashScriptExtraDefines += """addJava "-Dlogback.configurationFile=${app_home}/../conf/logback.xml""""

dockerExposedPorts := Seq(9070, 9080, 9090)
packageName in Docker := "server"
version in Docker := version.value
dockerRepository := Some("actor")
dockerUpdateLatest := true
