
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.11.2/lib/jspec.js')
load('lib/js_objects.js')

JSpec
.exec('spec/spec.js_objects.js')
.run({ formatter: JSpec.formatters.Terminal })
.report()
