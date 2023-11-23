import ExpoModulesCore
import SwiftUI
import Combine

public class DatepickerModel: ObservableObject {
    @Published var date: Date = .now
    @Published var backgroundColor: Color = .clear
    @Published var cornerRadius: CGFloat = 0

    init() {
    }
}

public final class DatepickerView: ExpoView {
    let model = DatepickerModel()
    let contentView: UIHostingController<DatepickerContentView>
    let onValueChanged = EventDispatcher()
    var disposables = Set<AnyCancellable>()

    public required init(appContext: AppContext? = nil) {
        contentView = UIHostingController(rootView: DatepickerContentView(model: model))
        super.init(appContext: appContext)
        contentView.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        self.clipsToBounds = true
        self.addSubview(contentView.view)

        model.$date.sink { [weak self] date in
            let formatter = ISO8601DateFormatter()
            self?.onValueChanged([
                "value": formatter.string(from: date)
            ])
        }.store(in: &disposables)
    }
}

struct DatepickerContentView: View {
    @ObservedObject var model: DatepickerModel

    var body: some View {
        VStack { 
            DatePicker("", selection: $model.date, in: ...Date(), displayedComponents: .date)
                .labelsHidden()
                .datePickerStyle(.graphical)
                .background(model.backgroundColor)
                .cornerRadius(model.cornerRadius)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
