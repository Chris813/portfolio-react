import GitHubCalendar from "react-github-calendar";
import '../../Styles/Github.scss'
export const Github = () => {
    return (
        <div className="github">
            <h1>GitHub</h1>
            <div className="github-content">
                <GitHubCalendar
                    username="Chris813"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    theme={{
                        light: ['hsl(0, 0%, 92%)', '#5D407A'],
                        dark: ['#333', 'rgb(74, 47, 189)'],
                      }}
                />
            </div>
        </div>
    );
}