import ExpoModulesCore
import SwiftUI

public class DatepickerModule: Module {
    public func definition() -> ModuleDefinition {
        Name("Datepicker")

        View(DatepickerView.self) {
            Events("onValueChanged")

            Prop("date") { (view: DatepickerView, prop: String) in
                let formatter = DateFormatter()

                // Set the date format to ISO 8601
                formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
                if let date = formatter.date(from: prop) {
                    view.model.date = date
                } else {
                    debugPrint("Invalid date format: \(prop)")
                }
            }

            Prop("backgroundColor") { (view: DatepickerView, prop: UIColor?) in
                if let prop = prop {
                    view.model.backgroundColor = Color(prop)
                } else {
                    view.model.backgroundColor = .clear
                }
            }

            Prop("cornerRadius") { (view: DatepickerView, prop: Double?) in
                if let prop = prop {
                    view.model.cornerRadius = prop
                } else {
                    view.model.cornerRadius = 0
                }
            }
        }
    }
}
